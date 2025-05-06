#!/bin/bash

# Ouvre "ng serve -o" dans un nouvel onglet ou une nouvelle fenêtre de terminal
gnome-terminal -- bash -c "ng serve -o; exec bash"

# Ouvre "pnpm run api" dans un autre onglet ou fenêtre
gnome-terminal -- bash -c "pnpm run api; exec bash"
