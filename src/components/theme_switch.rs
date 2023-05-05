use leptos::*;
use web_sys::{window, Document, Element, Window};

/// Theme Switcher beetween dark and light theme colors
#[component]
pub fn ThemeSwitch(cx: Scope) -> impl IntoView {
    let is_dark = get_theme();

    let (prefers_theme, set_prefers_theme) = create_signal(cx, is_dark);

    let theme_icon = move || format!("fa-regular {} fa-4x", set_icon(prefers_theme.get()));

    let change_theme = move |_| {
        set_prefers_theme.update(|dark| *dark = !*dark);
        if prefers_theme.get() {
            set_scheme("dark")
        } else {
            set_scheme("light")
        }
    };

    view! { cx,
        <button class="btn" on:click=change_theme><i class={theme_icon} ></i></button>
    }
}

fn set_icon(is_dark: bool) -> &'static str {
    if is_dark {
        "fa-sun"
    } else {
        "fa-moon"
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
