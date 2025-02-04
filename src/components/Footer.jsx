import { useTranslation } from 'react-i18next';
// test 

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="p-4 bg-gray-900 text-white text-center">
      <div className="space-x-4">
        <a href="/information">{t('footer.about')}</a>
        <a href="/solutions">{t('footer.solutions')}</a>
        <a href="/contact">{t('footer.contact')}</a>
      </div>
      <p className="mt-4"> {t('footer.rights')}</p>
      <div class="socialmedia">
            <a class = "Facebook">
                <a href="https://www.facebook.com/" target="_blank"><img src = "https://images.seeklogo.com/logo-png/27/1/facebook-logo-png_seeklogo-273078.png?v=1957936080409174768" width="50px" height="50px" /></a>
            </a>
            <a class = "Instagram">
                <a href="https://www.instagram.com/"><img src = "https://images.seeklogo.com/logo-png/43/1/instagram-new-2022-logo-png_seeklogo-438252.png?v=1957907345596552104"  width="50px" height="50px" /></a>
            </a>
            <a class = "X">
                <a href="https://www.x.com/" target="_blank"><img src = "https://images.seeklogo.com/logo-png/49/1/twitter-x-logo-png_seeklogo-492395.png?v=1957908349124828952" width="50px" height="50px" /></a>
            </a>
            <a class = "Youtube">
                <a href="https://www.youtube.com/channel/" target="_blank"><img src = "https://images.seeklogo.com/logo-png/31/1/youtube-2017-icon-logo-png_seeklogo-316067.png?v=1957936064225231056" width="50px" height="50px" /></a>
              
            </a>
        </div>

    </footer>
  );
}
