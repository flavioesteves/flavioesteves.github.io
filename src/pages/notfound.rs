use leptos::*;

#[component]
pub fn NotFoundPage() -> impl IntoView {
    log::debug!("Start NotFound");

    view! {
        <>
            <h1 class="align-right">"Not Found"</h1>
        </>
    }
}
