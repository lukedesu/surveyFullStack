#!/bin/bash
# make sure you have execute permissions
# chmod +x ./sendgrid_webhook.sh
# to run, type ./sendgrid_webhook.sh in the terminal

function localtunnel {
  lt -s yalevanrental9012 --port 5000
}

until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
