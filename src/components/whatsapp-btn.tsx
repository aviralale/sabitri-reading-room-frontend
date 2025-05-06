import WhatsappIcon from "@/assets/icons/WhatsappIcon";

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/+9779801119223"
      target="_blank"
      className="bg-[#25D366] size-18 flex justify-center items-center rounded-full fixed bottom-16 right-10 shadow-lg shadow-[#25D366]/50 z-[1000]"
    >
      <WhatsappIcon />
    </a>
  );
};

export default WhatsappButton;
