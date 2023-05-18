use leptos::*;
use web_sys::{window, Document, Element, Window};

/// Theme Switcher beetween dark and light theme colors
#[component]
pub fn ThemeSwitch(cx: Scope) -> impl IntoView {
    let is_dark = get_theme();

    let (prefers_theme, set_prefers_theme) = create_signal(cx, is_dark);

    let change_theme = move |_| {
        set_prefers_theme.update(|dark| *dark = !*dark);
        if prefers_theme.get() {
            set_scheme("dark")
        } else {
            set_scheme("light")
        }
    };

    view! { cx,
    <div id="theme-switch">
    <div class="mode-toggle noselect">
        <h6 id="label-dark">"Dark"</h6>
        <div class="toggle-switch" on:click=change_theme></div>
        <h6 id="label-light">"Light"</h6>
    </div>
    </div>
    }
}

fn set_scheme(theme: &str) -> () {
    let theme_selector = get_document_element();
    theme_selector
        .set_attribute("data-theme", &theme)
        .expect("Data theme not correctly set");
    ()
}

fn get_theme() -> bool {
    let html_element = get_document_element();
    let theme = html_element
        .get_attribute("data-theme")
        .expect("Data Theme");

    match theme.as_str() {
        "dark" => true,
        _ => false,
    }
}

fn get_document_element() -> Element {
    let window: Window = window().expect("Window not found!!");
    let document: Document = window.document().expect("Document not found!!");

    let theme_selector = document
        .document_element()
        .expect("Document element not found");

    theme_selector
}
