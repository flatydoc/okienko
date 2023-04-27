export const Map = ({ mapRef }) => {
  return (
    <iframe
      ref={mapRef}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.3003023221763!2d21.049899076477015!3d52.27424987199776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc2755def265%3A0xfd2e6964ed9a19c1!2zT3LFgm93c2thIDcsIDAzLTU3MSBXYXJzemF3YSwg0J_QvtC70YzRiNCw!5e0!3m2!1sru!2sby!4v1682363008693!5m2!1sru!2sby"
      width="100%"
      height="400"
      //   style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};
