import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, updateActiveTab, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnail
  const shiftImage = () => updateActiveTab(id)
  const hilight = isActive ? 'non-blur' : ''

  return (
    <li className={`thumbnail-container ${hilight}`}>
      <button onClick={shiftImage} type="submit">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
