# NANDA for EDGE AI 

## Requirements
* Personal Computer:
  * [JetPack SDK 6.1](https://developer.nvidia.com/embedded/jetpack-sdk-61) (make sure you are not downloading JetPack 5.1.3 from the Jetson AI Docs! It will give you an error when trying to boot)
  * Need a computer to flash to the Jetson
  * Jetson Orin Nano Developer Kit - JetPack 5.1.3 image
  * Balena Etcher
* Hardware Materials:
  * NVIDIA Jetson Orin Nano 8GB Module
  * USB Type-C Power Adapter
  * USB Type-C to Type-A Cable
  * microSD Card (64 GB or higher)
  * NVME SSD 1TB or higher. The Jetson has two slots - a 2230 NVMe and a 2280 NVMe
* Jetson Orin Nano
  * Chromium
  * Git and Git LFS
  * Advanced Package Tool (apt) package manager
  * Python 3

## Resources
* [Initial Setup Guide for Jetson Orin Nano Developer Kit](https://www.jetson-ai-lab.com/initial_setup_jon.html#__tabbed_6_1)
* [Jetson Orin Nano Developer Kit Getting Started Guide](https://developer.nvidia.com/embedded/learn/get-started-jetson-orin-nano-devkit)
* [JetPack 6.1](https://developer.nvidia.com/embedded/jetpack-sdk-61)
* [Jetson Orin Nano Super Setup Guide | OS Install, NVMe Upgrade, + Ollama AI](https://www.youtube.com/watch?v=NksYHoLcPKs)
* [NVIDIA Jetson Orin Nano Super COMPLETE Setup Guide & Tutorial](https://www.youtube.com/watch?v=-PjMC0gyH9s)
## Set Up
### Step 1
Install [NVIDIA JetPack SDK](https://developer.nvidia.com/embedded/jetpack). We are currently working with [JetPack 6.1](https://developer.nvidia.com/embedded/jetpack-sdk-61) and a microSD Card of 1 TB. In order to download, you will need to sign into your [NVIDIA account](https://developer.nvidia.com/account). The SDK Manager needs to meet the minimum requirements of screen resolution equal or larger than 1440x900. Once you have the SDK Manager, log in to your NVIDIA Developer account. After signing in, you will see a screen displaying informatioin about your system configuration including your **host machine** and your **target hardware** in our case we will be working with the Jetson AGX Orin modules but will continue with the microSD way of setting up. 

### Step 2
Next, we can get started with setting up our hardware! If you have the Jetson Orin Nano from the Developer Kit, you will need to upgrade to the latest firmware. This is because the Jetson Orin Nano Developer Kit comes with an old firmware flashed at the factory, which is NOT compatible with JetPack 6.x.
Therefore, you must upgrade to the latest firmware, before inserting SD card flashed with JetPack 6.x image (unless the firmware previuosly updated). Additional instructions are listed [here](https://developer.nvidia.com/embedded/learn/get-started-jetson-orin-nano-devkit#prepare).

### Step 3
Download the SD card image onto your PC. Here, we will be using JetPack 5.1.3 Image. Use [Balena Etcher](https://etcher.balena.io) to flash image to SD card.
In your terminal, if you do not see your microSD card anymore after flashing, you can run the following commands to check if the flash and verification process were successful. 

```bash
diskutil list
```

In my case, my microSD was `/dev/disk16 (external, physical)`. To eject I did the following: 

```bash
diskutil eject /dev/disk16
```

You will know that Balena flashed the SD card correctly if you no longer see the SD card showing on your desktop. 

### Step 4
Next, connect your monitor, mouse, and keyboard to the Jetson. If needed you may also plug in your Ethernet port. 

You will need to use a **Display Port** to plug in the monitor. Lastly, turn on your Jetson by plugging in your power supply. 

Complete the setup process and install the needed tools including Python, Chromium, Git, and GitLFS. 

On my hardware, Chromium did not open correctly. Running the commands below gave me `E: Package 'chromium' has no installation candidate`.

```bash
sudo apt update
sudo apt install -y chromium
```

To reinstall Chromium, I ran the following commands in my Terminal. 

```bash
sudo apt update
sudo apt install -y flatpak
sudo flatpak remote-add --if-not-exists flathub http://flathub.org/repo/flathub.flatpakrepo
flatpak remotes
```

Install Chromium
```bash
sudo flatpak install -y flathub org.chromium.Chromium
flatpak run org.chromium.Chromium
```

After installing Chromium, install an IDE of your choice. I will be working with PyCharm and Visual Studio Code.

If you do not have git, to install git: 
```bash
sudo apt-get install git
```

Install Python
```bash
sudo apt install -y python3 python3-pip python3-venv build-essential python3-dev
```


### Step 5
To create a new agent, start with NANDA's main repository. Create a fork of the NANDA repository and clone your forked repo.
```bash
git clone https://github.com/projnanda/adapter
```

### Step 6 
Connect the NVMe SSD to the Jetson Nano Orin. Remove the screws from the bottom of the hardware to install. The screws help keep the NVMe in place. 

### Step 7 
Now that we have the Jetson Jetpack OS running, we will see the NVIDIA logo as your background image. At the top right hand corner, you will see options for power supply including:
* 15W (mid-range)
* 7W (ideal for battery powered scenarios) 
* MAXN (full power output and performance)

## Examples 

### Ollama 
Lets try running a local LLM (Text Generation) on the Jetson. First, navigate to the Chromium web browser. 
We will need to install Ollama and connect it to a web interface to work with. Communicate with a model through the terminal. 
https://www.jetson-ai-lab.com/tutorial_ollama.html 
Try it with Jetson Docker containers instead. 
## Contribution 
