import React from 'react';
export const MainGallery = (props) => {
    return (
        <div>
            <main className="main">
                <div className="main-gutter">
                    <section className="main-gallery">
                        {props.children}
                    </section>
                </div>
            </main>
        </div>
    )
}
