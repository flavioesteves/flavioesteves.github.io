use leptos::*;
use leptos_meta::*;

#[component]
pub fn ThemeSwitch(cx: Scope) -> impl IntoView {
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

        <meta name="color-scheme"  content=color_scheme />

        <button on:click=change_theme>"Dark Mode"</button>
    }
}
