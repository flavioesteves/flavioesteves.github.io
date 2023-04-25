use leptos::*;

#[component]
pub fn NotFoundPage(cx: Scope) -> impl IntoView {
    log::debug!("Start NotFound");

    view! {cx,
        <>
            <h1 class="align-right">"Not Found"</h1>
        </>
    }
}
