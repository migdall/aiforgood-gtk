# visionOS 2.0 or 26

## Requirements 
  * XCode, Reality Commposer, CreateML
  * Hardware: Mac (ideally a computer with an M3/M4 chip) and an Apple Vision Pro
  * CoreML ([BERT-SQuAD](https://github.com/huggingface/transformers), [MNIST](http://yann.lecun.com/exdb/mnist/))
  * [Apple Vision Framework](https://developer.apple.com/documentation/vision/)
    
## Set Up

This application can only be run on an Apple Vision Pro with visionOS 2.0 and higher. Created with an Apple Developer account (no enterprise APIs).

Install [XCode beta](https://developer.apple.com/support/install-beta/) (Version 26.0 beta 2) and visionOS beta. You will need to be running macOS Sonoma (version 14.0 or later).
<img width="1052" alt="Screenshot 2025-07-06 at 5 02 26 PM" src="https://github.com/user-attachments/assets/35808960-6607-497e-b0d9-97f7596c51e5" />

Install GitLFS
```
git install lfs
```

Retrieve your **Access Token** for your app from [this page](https://huggingface.co/docs/hub/en/security-tokens). In your terminal, add your token to your environment variables.

```bash
$ export VISION_TOKEN='xoxb-XXXXXXXXXXXX-xxxxxxxxxxxx-XXXXXXXXXXXXXXXXXXXXXXXX'
```



