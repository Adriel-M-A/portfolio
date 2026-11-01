---
trigger: always_on
---

# Regla Estricta de Git Commits y Push

1. **Prohibición absoluta sin autorización explícita**: Sin importar el modo en el que se esté trabajando (planificación, ejecución, revisión o corrección rápida), **jamás se debe ejecutar `git commit` ni `git push` sin autorización explícita del usuario para ese commit en particular**.
2. **Autorización de un solo uso (no transferible)**: Si en un mensaje anterior el usuario dio autorización para crear o subir un commit (o pidió que se subiera uno), **eso NO autoriza commits posteriores**. Cada nuevo commit o push requiere solicitar y recibir una nueva autorización explícita del usuario en el turno actual.
3. **Rama de trabajo**: Nunca hacer commits ni push directamente a `main`. Todo cambio autorizado se realiza únicamente sobre la rama `development`.
