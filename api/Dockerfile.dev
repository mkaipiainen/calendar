FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy csproj and restore as distinct layers
COPY . .
RUN dotnet restore
# Install the dotnet watch tool
RUN dotnet tool install --global dotnet-watch

# Start the app
CMD ["dotnet", "watch", "run", "--no-launch-profile"]