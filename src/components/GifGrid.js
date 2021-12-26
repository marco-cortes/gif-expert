import { GifCard } from './GifCard';
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {


    const { data: images, loading } = useFetchGifs(category);

    return (
        <div>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p>Loading...</p>}
            <div className="card-grid">
                {
                    images.map(img => {
                        return (
                            <GifCard key={img.id} {...img} />
                        );
                    })
                }
            </div>
        </div>
    )
}

export default GifGrid;