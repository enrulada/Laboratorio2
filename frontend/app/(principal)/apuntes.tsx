
import {
  View,
  Text,
  Pressable,
  FlatList,
  ActivityIndicator,
  Image,
  Animated,
  Alert,
  Platform,
} from 'react-native';

import { useEffect, useRef, useState } from 'react';
import {
  Link,
  useLocalSearchParams,
  useRouter,
} from 'expo-router';

import * as ImagePicker from 'expo-image-picker';
import { CameraView, useCameraPermissions } from 'expo-camera';

type Apunte = {
  id: number;
  titulo: string;
  descripcion: string;
  imagen?: string;
};

export default function ApuntesScreen() {
  const router = useRouter();

  const { idMateria, nombreMateria } = useLocalSearchParams<{
    idMateria?: string;
    nombreMateria?: string;
  }>();

  const [apuntes, setApuntes] = useState<Apunte[]>([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarCamara, setMostrarCamara] = useState(false);
  const [mensaje, setMensaje] = useState('');

  const [permisoCamara, solicitarPermisoCamara] =
    useCameraPermissions();

  const camaraRef = useRef<CameraView>(null);
  const opacidad = useRef(new Animated.Value(0)).current;
  const siguienteId = useRef(4);

  useEffect(() => {
    cargarApuntes();
  }, [idMateria]);

  const cargarApuntes = async () => {
    try {
      setCargando(true);

      // Datos locales para la demostración de StudentHub.
      const datos: Apunte[] = [
        {
          id: 1,
          titulo: 'Resumen de la materia',
          descripcion: 'Conceptos principales para estudiar.',
        },
        {
          id: 2,
          titulo: 'Ejercicios prácticos',
          descripcion: 'Actividades para practicar los contenidos.',
        },
        {
          id: 3,
          titulo: 'Preparación para examen',
          descripcion: 'Material de repaso para la evaluación.',
        },
      ];

      setApuntes(datos);
    } catch (error) {
      console.error('Error al cargar los apuntes:', error);
    } finally {
      setCargando(false);
    }
  };

  // Mostrar mensajes de error en web y dispositivos móviles.
  const avisar = (texto: string) => {
    if (Platform.OS === 'web') {
      window.alert(texto);
    } else {
      Alert.alert('StudentHub', texto);
    }
  };

  // ANIMACIÓN DE CONFIRMACIÓN
  const mostrarAnimacion = () => {
    setMensaje('✅ ¡Apunte agregado correctamente!');

    opacidad.stopAnimation();
    opacidad.setValue(0);

    Animated.sequence([
      Animated.timing(opacidad, {
        toValue: 1,
        duration: 450,
        useNativeDriver: true,
      }),
      Animated.delay(1600),
      Animated.timing(opacidad, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // AGREGAR UNA IMAGEN A LA LISTA
  const agregarImagen = (uri: string) => {
    const nuevoApunte: Apunte = {
      id: siguienteId.current++,
      titulo: 'Apunte con imagen',
      descripcion: 'Imagen incorporada desde StudentHub.',
      imagen: uri,
    };

    setApuntes((anteriores) => [
      ...anteriores,
      nuevoApunte,
    ]);

    mostrarAnimacion();
  };

  // ELIMINAR SOLAMENTE LA FOTO SELECCIONADA
  const eliminarFoto = (id: number) => {
    setApuntes((anteriores) =>
      anteriores.filter((apunte) => apunte.id !== id)
    );
  };

  // SELECCIONAR IMAGEN DE LA GALERÍA
  const elegirImagen = async () => {
    try {
      if (Platform.OS !== 'web') {
        const permiso =
          await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permiso.granted) {
          avisar('Necesitamos permiso para acceder a tus imágenes.');
          return;
        }
      }

      const resultado =
        await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: false,
          quality: 0.8,
        });

      if (
        !resultado.canceled &&
        resultado.assets.length > 0
      ) {
        agregarImagen(resultado.assets[0].uri);
      }
    } catch (error) {
      console.error('Error al seleccionar imagen:', error);
      avisar('No se pudo seleccionar la imagen.');
    }
  };

  // ABRIR LA CÁMARA
  const abrirCamara = async () => {
    try {
      if (!permisoCamara?.granted) {
        const respuesta = await solicitarPermisoCamara();

        if (!respuesta.granted) {
          avisar('Necesitamos permiso para utilizar la cámara.');
          return;
        }
      }

      setMostrarCamara(true);
    } catch (error) {
      console.error('Error al abrir cámara:', error);
      avisar('No se pudo abrir la cámara.');
    }
  };

  // CAPTURAR UNA FOTOGRAFÍA
  const sacarFoto = async () => {
    try {
      const foto = await camaraRef.current?.takePictureAsync({
        quality: 0.8,
      });

      if (foto?.uri) {
        setMostrarCamara(false);
        agregarImagen(foto.uri);
      }
    } catch (error) {
      console.error('Error al sacar foto:', error);
      avisar('No se pudo tomar la fotografía.');
    }
  };

  const estiloBoton = {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center' as const,
    marginBottom: 10,
  };

  // PANTALLA DE CÁMARA
  if (mostrarCamara) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#111827',
        }}
      >
        <CameraView
          ref={camaraRef}
          facing="back"
          style={{ flex: 1 }}
        />

        <View style={{ padding: 20 }}>
          <Pressable
            onPress={sacarFoto}
            style={estiloBoton}
          >
            <Text
              style={{
                color: '#FFFFFF',
                fontWeight: 'bold',
              }}
            >
              📸 Capturar fotografía
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setMostrarCamara(false)}
            style={estiloBoton}
          >
            <Text style={{ color: '#FFFFFF' }}>
              Cancelar
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // PANTALLA MIS APUNTES
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F5F7FA',
        padding: 25,
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: '#2563EB',
          marginTop: 30,
          textAlign: 'center',
        }}
      >
        📝 Mis Apuntes
      </Text>

      {nombreMateria && (
        <>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#1e2a5e',
              textAlign: 'center',
            }}
          >
            Materia: {nombreMateria}
          </Text>

          <Text
            style={{
              marginTop: 8,
              marginBottom: 20,
              fontSize: 16,
              color: '#666',
              textAlign: 'center',
            }}
          >
            ID de materia: {idMateria}
          </Text>
        </>
      )}

      {/* BOTÓN CÁMARA */}
      <Pressable
        onPress={abrirCamara}
        style={estiloBoton}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontWeight: 'bold',
          }}
        >
          📷 Sacar foto de un apunte
        </Text>
      </Pressable>

      {/* BOTÓN GALERÍA */}
      <Pressable
        onPress={elegirImagen}
        style={estiloBoton}
      >
        <Text
          style={{
            color: '#FFFFFF',
            fontWeight: 'bold',
          }}
        >
          🖼️ Elegir imagen de la galería
        </Text>
      </Pressable>

      {/* MENSAJE ANIMADO */}
      <Animated.View
        style={{
          opacity: opacidad,
          backgroundColor: '#DCFCE7',
          borderRadius: 10,
          padding: 12,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: '#166534',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {mensaje}
        </Text>
      </Animated.View>

      {/* LISTA DE APUNTES */}
      {cargando ? (
        <ActivityIndicator
          size="large"
          color="#2563EB"
          style={{ marginTop: 30 }}
        />
      ) : (
        <FlatList
          data={apuntes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 18,
                borderRadius: 10,
                marginBottom: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#1e2a5e',
                }}
              >
                {item.titulo}
              </Text>

              <Text
                style={{
                  marginTop: 8,
                  fontSize: 16,
                  color: '#555',
                }}
              >
                {item.descripcion}
              </Text>

              {/* IMAGEN Y BOTÓN ELIMINAR */}
              {item.imagen && (
                <View>
                  <Image
                    source={{ uri: item.imagen }}
                    style={{
                      width: '100%',
                      height: 220,
                      borderRadius: 10,
                      marginTop: 12,
                    }}
                    resizeMode="contain"
                  />

                  <Pressable
                    onPress={() => eliminarFoto(item.id)}
                    style={{
                      backgroundColor: '#DC2626',
                      padding: 12,
                      borderRadius: 10,
                      marginTop: 12,
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                        fontSize: 15,
                      }}
                    >
                      🗑️ Eliminar foto
                    </Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center' }}>
              No hay apuntes disponibles.
            </Text>
          }
        />
      )}

      {/* NAVEGACIÓN A MATERIAS */}
      <Link
        href="/materias"
        style={{
          color: '#2563EB',
          fontSize: 16,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 10,
        }}
      >
        📚 Ir a Mis Materias
      </Link>

      {/* BOTÓN VOLVER */}
      <Pressable
        onPress={() => router.back()}
        style={{
          padding: 15,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: '#2563EB',
            fontSize: 16,
            fontWeight: 'bold',
          }}
        >
          ← Volver
        </Text>
      </Pressable>
    </View>
  );
}
