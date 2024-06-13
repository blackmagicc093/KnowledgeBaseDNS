---
title: Overview
sidebar_position: 1
---

## What is AdGuard DNS Client?

A cross-platform lightweight DNS client for [AdGuard DNS]. It operates as a DNS server that forwards DNS requests to the corresponding upstream resolvers.

[AdGuard DNS]: https://adguard-dns.io

## Quick start {#start}

:::note

AdGuard DNS Client is still in the Beta stage. Things will break and there are still bugs.

:::

Supported operating systems:

- Linux;
- macOS;
- Windows.

Supported CPU architectures:

- 64-bit ARM;
- AMD64;
- i386.

## Getting started {#start-basic}

### Unix-like operating systems {#start-basic-unix}

1. Download and unpack the `.tar.gz` or `.zip` archive from the [releases page][releases].

2. Install it as a service by running:

    ```sh
    ./AdGuardDNSClient -s install -v
    ```

3. Edit the configuration file `config.yaml`.

4. Start the service:

    ```sh
    ./AdGuardDNSClient -s start -v
    ```

To check that it works, use any DNS checking utility. For example, using `nslookup`:

```sh
nslookup -debug 'www.example.com' '127.0.0.1'
```

[releases]: https://github.com/AdguardTeam/AdGuardDNSClient/releases

### Windows {#start-basic-win}

Just download and install using the MSI installer from the [releases page][releases].

To check that it works, use any DNS checking utility. For example, using `nslookup.exe`:

```sh
nslookup -debug "www.example.com" "127.0.0.1"
```

## Command-line options {#opts}

Any option overrides the corresponding value provided by configuration file.

### Service {#opts-service}

Option `-s <value>` specifies the OS service action. Possible values are:

- `install`: installs AdGuard DNS Client as a service;
- `restart`: restarts the running AdGuard DNS Client service;
- `start`: starts the installed AdGuard DNS Client service;
- `status`: shows the status of the installed AdGuard DNS Client service;
- `stop`: stops the running AdGuard DNS Client;
- `uninstall`: uninstalls AdGuard DNS Client service.

### Verbose {#opts-verbose}

Option `-v` enables the verbose log output.

## Configuration {#conf}

### File {#conf-file}

The YAML configuration file is described in the [`configuration.md`] file, and there is also a sample configuration file `config.dist.yaml`.  Some configuration parameters can also be overridden using the environment, see [`environment.md`].

[`configuration.md`]: configuration.md
[`environment.md`]:   environment.md

## Exit codes {#exit-codes}

There are a few different error codes that may appear under different error conditions:

- `0`: AdGuardDNSClient successfully finished and exited, no errors.

- `1`: Internal error, most probably misconfiguration.

- `2`: Bad command-line argument or its value.