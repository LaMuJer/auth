import CategoryItemComponent from "../category-item/Category-item.component"
import "./diectory.style.scss"

const DirectoryComponent = ({categories}) => {

    return (
        <div className="directory-container">
            {
                categories.map((category) => (
                    <CategoryItemComponent
                        category={category} key={category.id}
                    />
                ))
            }
        </div>
    )
}

export default DirectoryComponent
