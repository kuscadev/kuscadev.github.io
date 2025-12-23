---
title: "How to Install Cisco Packet Tracer on Linux Using Distrobox"   
description: "Cisco Packet Tracer'ı dilediğiniz linux dağıtımında kullanabilirsiniz."
date: 2025-04-21
draft: false    
tags: ["markdown", "css", "html", "sample"]
categories: ["how-to","linux"]
---

Every student or professional stepping into the world of networking eventually crosses paths with Cisco Packet Tracer. However, if you are a Linux enthusiast who prefers a distribution not based on Debian/Ubuntu (like Fedora, Arch, OpenSuse etc.), a slightly unpleasant surprise awaits you on Cisco's download page: Only a .deb package is available.
The absence of an official version in stores like Snap or Flatpak usually forces users into two inconvenient options:
Setting up a Virtual Machine (VM) and straining system resources.
Switching distributions just for this single application.

However, there is a third and much more efficient way: Distrobox.
In this guide, I will explain how to run Packet Tracer like a native application without chancing your Linux distribution or dealing with heavy virtual machines.



## What is Distrobox?
I won't go into a lengthy explanation of the architecture here, but briefly: Distrobox is a tool that allows you to run any Linux distribution of your choice inside your current terminal using containerization tools like Docker or Podman. For more detailed information, you can visit the official Distrobox website.
Installing Distrobox
You can install Distrobox using your distribution's package manager, just like any other software.

OpenSUSE:

```bash
sudo zypper install distrobox
```

Solus:
```bash
sudo eopkg install distrobox
```

Fedora:

```bash
sudo dnf install distrobox
```

For other distributions, you can install it similarly using your package manager.
Note: If Podman or Docker was not installed automatically during the Distrobox installation, you need to install one of them. I will proceed using Podman in this guide.

---

Installing Packet Tracer
We have completed the Distrobox and Podman installations. Now , it's time to create the environment where we can install .deb packages.
Open your terminal and run the following commands in order:
Create a Debian environment using Distrobox: (I used the $USER variable here so it works automatically for your username)
```bash
distrobox-create --name Debian --image debian:12 --home /home/$USER/distrobox/debian12
Enter the Debian environment:

distrobox-enter Debian
Update the environment:

sudo apt update
Install the necessary dependencies:

sudo apt install libqt5multimedia5 libqt5xml5 libqt5script5 libqt5scripttools5 libqt5sql5
```
Now comes the easiest part. You need to go to Cisco's website and download Packet Tracer. Make sure to select the Ubuntu version.
Once the download is complete, return to the terminal (ensure you are still inside the Distrobox container)
```bash
cd ~/Downloads
# Or navigate to wherever you saved the file.
Install the downloaded file:
sudo apt install ./CiscoPacketTracer...
# Tip: Type 'sudo apt install ./Cisco' and hit Tab to auto-complete the filename.
```
## Accessing Packet Tracer from the Application Menu
Congratulations! Technically, the installation is complete. However, right now, you would need to enter the Debian container via the terminal to launch Packet Tracer. To avoid this and make it accessible like a regular app, there is one final step.
Run this command in the terminal (inside the container):
```bash
distrobox-export -app packettracer
```
That's it! You can now access and run Cisco Packet Tracer directly from your system's application menu. You can close the terminal now.