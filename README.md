# Lehrer-iPad Umzug – Web-App

Diese kleine Web-App führt Kolleginnen und Kollegen Schritt für Schritt durch den Gerätewechsel.

## Starten

1. Ordner auf einen Rechner im Schul-WLAN kopieren.
2. Terminal öffnen und in den Ordner wechseln.
3. Lokalen Web-Server starten:

```bash
python3 -m http.server 8000
```

4. Die IP-Adresse des Rechners im WLAN herausfinden.
   - macOS: `ipconfig getifaddr en0` (oder `en1` bei WLAN)
5. Im Browser testen: `http://DEINE-IP:8000`

## QR-Code erstellen

- Öffne `qr.html` im Browser.
- Trage die URL der Anleitung ein (z. B. `http://DEINE-IP:8000`).
- QR-Code wird angezeigt und kann direkt gescannt werden.

## Bilder einfügen (optional)

Lege die Fotos in den Ordner `assets/`:

- `assets/pencil-charge.jpg` (Pencil per USB‑C)
- `assets/case-assembly.jpg` (Hülle anbringen)

Wenn keine Bilder vorhanden sind, blendet die App die Platzhalter automatisch aus.
