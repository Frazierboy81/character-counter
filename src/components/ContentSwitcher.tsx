import { useState } from "react"

type ContentType = 'text' | 'image' | 'video'


function ContentSwitcher(){ 
    const [contentType, setContentType] = useState<ContentType>('text');

    let contentElement: React.ReactNode;

    let image = 'https://images.unsplash.com/photo-1761405378558-3688471ba000?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364'

    if (contentType === 'text') {
        contentElement = <p>This is some text content</p>
    } else if (contentType === 'image') {
        contentElement = <img src={image} alt="Placeholder" height={500} />
    } else if (contentType === 'video') {
        contentElement = <p>Image a video player here.</p>
    }

    return(
    <div>
         <div>
            <h2>Content Switcher</h2>
        </div>

        <div>
            <button onClick={() => setContentType('text')}>Text</button>
            <button onClick={() => setContentType('image')}>Image</button>
            <button onClick={() => setContentType('video')}>Video</button>
        </div>
        <div>{contentElement}</div>
    </div>

    );
}   

export default ContentSwitcher;