terraform {
  required_providers {
    hcloud = {
      source  = "hetznercloud/hcloud"
      version = "~> 1.45"
    }
  }
}

provider "hcloud" {
  token = var.hcloud_token
}

variable "hcloud_token" {}

resource "hcloud_server" "devops" {
  name        = "devops-server"
  image       = "ubuntu-22.04"
  server_type = "cx23"
  location    = "hel1"
  ssh_keys = ["sggg.choi@gmail.com"]
}
