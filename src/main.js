import { setupCounter } from "./counter.js";
import instagram from "./instagram.svg";
import facebook from "./facebook.svg";
import youtube from "./youtube.svg";
import logo from "./logo.png";

document.querySelector("#app").innerHTML = `
  <header class="flex flex-col justify-center items-center w-full h-auto border">
        <!-- Primeiro header -->
        <section 
        id="header-first-content"
         class="flex h-[3.875rem] w-full items-center justify-between bg-rose-default bg-opacity-50 px-[5rem] py-0 shadow-lg"
         >
            <div class="social-icons flex items-center justify-around w-[10rem] h-full">
                <a href="#" aria-label="Instagram" class="flex items-center justify-center"><img src="${instagram}" alt="instagram-icon"></a>
                <a href="#" aria-label="Facebook" class="flex items-center justify-center"><img src="${facebook}" alt="facebook-icon"></a>
                <a href="#" aria-label="Youtube" class="flex items-center justify-center"><img src="${youtube}" alt="youtube-icon"></a>
            </div>

            <nav class="main-navigation">
                <ul>
                    <li><a href="#">Resultados e Transparência</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Notícias</a></li>
                    <li><a href="#">Como ajudar</a></li>
                    <li><a href="#">Contatos</a></li>
                </ul>
            </nav>
        </section>

        <!-- Segundo header -->
        <section class="header-second-content">
            <figure id="logo-container" class="flex items-center justify-around w-[10rem] h-[5rem]">
                <a href="/">
                    <img class="w-full object-cover" src="${logo}" alt="geeon-logo">
                </a>
            </figure>

            <nav class="main-navigation">
                <ul>
                    <li><a href="#">Projetos</a></li>
                    <li><a href="#">Torne-se um voluntário</a></li>
                    <li><a href="#">Eventos</a></li>
                </ul>
                <button 
                id="btn-donation" 
                class="${
                  `ml-[3rem] h-[3.125rem] w-[9.375rem] rounded-lg border border-solid border-rose-default ` +
                  `bg-rose-strong text-2xl font-bold text-white hover:cursor-pointer hover:bg-white ` +
                  `hover:text-rose-default hover:transition-all`
                }" 
                type="button"
                >DOAR</button>
            </nav>
        </section>
    </header>
    <main>
    <section class="h-[325px] "></section>
</main>
    
`;

setupCounter(document.querySelector("#counter"));
