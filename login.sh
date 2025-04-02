#!/bin/bash

# Diccionario asociativo para usuarios y contraseñas
declare -A usuarios=(
  ["usuario1"]="contraseña1"
  ["usuario2"]="contraseña2"
)

# Función para iniciar sesión
iniciar_sesion() {
  read -p "Nombre de usuario: " usuario
  read -sp "Contraseña: " contraseña
  echo ""  # Salto de línea para mayor claridad

  if [[ -n "${usuarios[$usuario]}" && "${usuarios[$usuario]}" == "$contraseña" ]]; then
    echo "Inicio de sesión exitoso"
  else
    echo "Nombre de usuario o contraseña incorrectos"
    iniciar_sesion  # Vuelve a intentar iniciar sesión
  fi
}

iniciar_sesion