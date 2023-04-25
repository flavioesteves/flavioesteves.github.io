use leptos::*;

const COPYRIGHT: &str = "© 2023";

#[component]
pub fn Navbar(cx: Scope) -> impl IntoView {
    view! {cx,
    <header id="header-home">
        <div class="container">
            <nav id="main-nav">
                <ul>
                    <li><a href="/" class="a-link">"Home"</a></li>
                    <li><a href="/about" class="a-link">"About"</a></li>
                    <li><a href="/contact" class="a-link">"Contact"</a></li>
                </ul>
            </nav>
            <div class="copyright">
                <p>{COPYRIGHT}
                    <br />
                    "Developed in "
                    <a href="https://www.rust-lang.org/" class="a-link"> "Rust" </a>
                    " & "
                    <a href="https://webassembly.org/" class="a-link"> "Wasm" </a>
                </p>
            </div>
        </div>
    </header>
    }
}
