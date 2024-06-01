using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;
using Microsoft.Identity.Abstractions;
using Microsoft.Identity.Web.Resource;
using Microsoft.Extensions.Logging;

var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.
// builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//     .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAdB2C"));
// builder.Services.AddAuthorization();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();


var app = builder.Build();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.Use(async (context, next) =>
{
    // Log the request path
    var logger = app.Services.GetRequiredService<ILogger<Program>>();
    logger.LogInformation("BasePath: {PathBase}", context.Request.PathBase);
    logger.LogInformation("Request: {Path}", context.Request.Path);
    logger.LogInformation("Full Request: {Request}",context.Request.PathBase +  context.Request.Path);
    // Call the next middleware in the pipeline
    await next.Invoke();
});

app.UseHttpsRedirection();
app.MapControllers();
app.Run();