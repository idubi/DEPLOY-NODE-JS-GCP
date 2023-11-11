#!/usr/bin/env bash
export GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/.secret/SA-idubi-dev.json
export GOOGLE_CLOUD_PROJECT=fleet-space-404401

echo $GOOGLE_CLOUD_PROJECT
echo $GOOGLE_APPLICATION_CREDENTIALS

 