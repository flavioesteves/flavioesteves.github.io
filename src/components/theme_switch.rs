use leptos::*;
use leptos_meta::{provide_meta_context, Meta, MetaProps};

/// Theme Switcher beetween dark and light theme colors
#[component]
pub fn ThemeSwitch(cx: Scope) -> impl IntoView {
    provide_meta_context(cx);
    let (prefers_theme, set_prefers_theme) = create_signal(cx, false);

    let change_theme = move |_| set_prefers_theme.update(|dark| *dark = !*dark);
    let color_scheme = move || {
        if prefers_theme.get() {
            "dark".to_string()
        } else {
            "light".to_string()
        }
    };

    view! { cx,

        <Meta name="color-scheme"  content=color_scheme />

        <button on:click=change_theme>"Dark Mode"</button>
    }
}
