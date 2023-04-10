const DefinedTypes = ['image', 'file', 'text'] as const;
export const DB_CONFIG = Object.freeze<
  Record<string, { payload: string; type: (typeof DefinedTypes)[number] }[]>
>({
  'Osmo Mobile 6': [
    {
      payload:
        'Hola, buen día! 🙌🏼 Te envío información del Osmo Mobile 6. Lo tenemos para entrega inmediata',
      type: 'text',
    },
    { payload: 'first-image.jpeg', type: 'image' },
    {
      payload: `DJI Osmo Mobile 6
      S/899 S/799 🔥Oferta Cyber LENZ🔥
      
      ✅ Seguimiento de rostro activo
      ✅ Control Bluetooth por aplicación DJI Mimo
      ✅ Estabilización profesional en 3 ejes
      
      📦 En stock para entrega inmediata
      ⚠️ Últimas unidades en stock. Separa la tuya`,
      type: 'text',
    },
    { payload: 'sample-vid.mp4', type: 'file' },
    { payload: 'second-image.jpeg', type: 'image' },
    { payload: 'thrid-image.jpeg', type: 'image' },
    {
      payload: `Tenemos también estos modelos disponibles 😊
      ¿Con qué modelo de celular y para qué tipo de videos lo utilizarías?`,
      type: 'text',
    },
  ],
  'Me gustaría recibir información del estabilizador Osmo Mobile A': [
    {
      payload: 'Hola! Claro te enviamos más información',
      type: 'text',
    },
    { payload: 'arc.png', type: 'image' },
    { payload: 'robert-downey.mp4', type: 'file' },
  ],
  'Me gustaría recibir información del estabilizador Osmo Mobile B': [
    {
      payload: 'Hola! Claro te enviamos más información en breves',
      type: 'text',
    },
    { payload: 'arc.png', type: 'image' },
    { payload: 'redhat-event-driven-architecture.pdf', type: 'file' },
  ],
});
