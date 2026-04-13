---
title: "easyrdp"   
description: "An RDP tool for lazy people."
date: 2026-04-13
draft: false    
tags: ["python", "rdp", "linux", "open-source", "remote desktop"]
categories: ["Tools"]
---
# Easy RDP
**An RDP tool for lazy people.**

Easy RDP is a lightweight Python-based wrapper for `xfreerdp`. It is designed to simplify remote desktop connections by providing a clean interactive prompt, eliminating the need to manually type long and complex command parameters.

## Features
- Interactive prompts for Target IP, Domain, Username, and Password.
- Automated parameter handling for common flags:
  - Dynamic resolution
  - Clipboard sharing
  - Certificate ignoring
- Easy installation and global command access.

## Requirements
- Python 3.x
- FreeRDP (`xfreerdp`)

## Installation
You can use the provided `install.sh` script to set up the tool on Debian-based systems. This script installs dependencies, sets the necessary permissions, and copies the tool to your local path.

```bash
chmod +x install.sh
./install.sh
```

Note: Ensure that ~/.local/bin is in your system's PATH.

## Usage
Once installed, simply run the command from any terminal:

```bash
easyrdp
```

Follow the prompts to establish your connection.