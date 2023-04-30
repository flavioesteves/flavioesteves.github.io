use leptos::*;
//use leptos_meta::{provide_meta_context, Meta, MetaProps};
use web_sys::{window, Document, Window};

/// Theme Switcher beetween dark and light theme colors
#[component]
pub fn ThemeSwitch(cx: Scope) -> impl IntoView {
    //  provide_meta_context(cx);

    let (prefers_theme, set_prefers_theme) = create_signal(cx, false);

    let change_theme = move |_| set_prefers_theme.update(|dark| *dark = !*dark);
    let color_scheme = move || {
        // console_log(format!("{:?}", prefers_theme.get()).as_str());
        if prefers_theme.get() {
            set_scheme("dark");
            "dark".to_string()
        } else {
            set_scheme("light");
            "light".to_string()
        }
    };

    view! { cx,
        //<Meta name="color-scheme"  content=color_scheme />
        <button on:click=change_theme>{color_scheme}</button>
    }
}
pub fn set_scheme(theme: &str) {
    let window: Window = window().expect("Window not found!!");
    let document: Document = window.document().expect("Document not found!!");

    let color_schema = document
        .query_selector("meta[name=\"color-scheme\"]")
        .expect("color-schema property")
        .unwrap();

    let theme_selector = document
        .document_element()
        .expect("Document element not found");

    theme_selector.set_attribute("data-theme", &theme);
    color_schema.set_attribute("content", &theme);
}
