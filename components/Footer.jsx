import Socials from "./Socials";

const Footer = () => {
  const currentYearCopyright = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            IconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* Copyright */}
          <div className="text-muted-foreground">
            © {currentYearCopyright} Yongki Satria Sanjaya. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
