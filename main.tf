provider "digitalocean" {
  token = var.digital_ocean_access_token
}

provider "cloudflare" {
  email   = var.cloudflare_email
  api_key = var.cloudflare_api_key
}


resource "cloudflare_record" "storieslikegrapes" {
  zone_id = var.cloudflare_zone_id
  name    = var.domain_name
  value   = digitalocean_reserved_ip.reserved_ip.ip_address
  type    = "A"
  ttl     = 1
  proxied = true
}

resource "digitalocean_reserved_ip" "reserved_ip" {
  region = "fra1"
}

data "digitalocean_ssh_key" "ubuntu_ssh_key" {
  name = "Desktop ubuntu"
}

data "digitalocean_ssh_key" "windows_ssh_key" {
  name = "Desktop windows"
}

resource "digitalocean_droplet" "droplet" {
  image  = "ubuntu-24-04-x64"
  name   = "www-1"
  region = "fra1"
  size   = "s-1vcpu-512mb-10gb"
  ssh_keys = [data.digitalocean_ssh_key.ubuntu_ssh_key.id, data.digitalocean_ssh_key.windows_ssh_key.id]

  connection {
    host = self.ipv4_address
    user = "root"
    type = "ssh"
    private_key = file("~/.ssh/id_rsa")
    timeout = "2m"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt update",
      "sudo apt upgrade -y",
      "curl -fsSL https://get.docker.com -o get-docker.sh",
      "sudo sh ./get-docker.sh -y"
    ]
  }
}

resource "digitalocean_reserved_ip_assignment" "reserved_ip_assignment" {
  ip_address = digitalocean_reserved_ip.reserved_ip.ip_address
  droplet_id = digitalocean_droplet.droplet.id
}

terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

variable "cloudflare_email" {
  description = "Cloudflare email"
}

variable "cloudflare_api_key" {
  description = "Cloudflare API key"
}

variable "cloudflare_zone_id" {
  description = "Cloudflare Zone ID"
}

variable "domain_name" {
  description = "Domain name for the SSL certificate"
}

variable "digital_ocean_access_token" {
  description = "Digital Ocean Access Token"
}

