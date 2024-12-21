# choco

## installation
- 以管理員身份運行 `Windows PowerShell`
- https://docs.chocolatey.org/en-us/choco/setup/#install-from-powershell-v3
- `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iwr https://community.chocolatey.org/install.ps1 -UseBasicParsing | iex`

## cli
- `choco install nvm`