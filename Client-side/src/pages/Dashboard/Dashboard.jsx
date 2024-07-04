import images from '../../data/images.js';
import Image from '../Home/Image.jsx';
import "https://unpkg.com/@appnest/masonry-layout?module";

function Dashboard() {
    return (
        <div>
            <masonry-layout cols="5" maxcolwidth="400" gap="10" debounce="500">
                {images.map((current, i) => {
                    return <Image key={i} image={current.image} />
                })}
            </masonry-layout>
        </div>
    )
}

export default Dashboard