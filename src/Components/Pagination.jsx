const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handePrevious = () => {
        onPrevious()
    }
    const handeNext = () => {
        onNext()
    }

    return (
        <div>
            <ul>
                {prev ? (
                <button onClick={handePrevious}>ANTES</button>
                ) : null }
                { next ? (
               <button onClick={handeNext}>DESPUES</button> 
                ) : null }
            </ul>
        </div>
    );
};

export default Pagination;