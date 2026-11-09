# ESP32 Food Locker Hardware

## Required Libraries (Arduino IDE / PlatformIO)

- WiFi (Built-in)
- HTTPClient (Built-in)
- ArduinoJson (by Benoit Blanchon)

## Pin Setup

- **GPIO 26:** Relay module (Locker lock)
- **GPIO 27:** Reed switch (Door sensor)

## Local Setup

1. Copy `include/config.h.example` to `include/config.h`
2. Enter your local WiFi network details and Supabase API key in `config.h`
