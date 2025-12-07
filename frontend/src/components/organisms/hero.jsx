import Button from '../atoms/button'
import Text from '../atoms/text'

export default function Hero({ 
  title, 
  subtitle,
  imageUrl,
  imagePosition = "right",
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  size = "md"
}) {
  const sizeClasses = {
    sm: "py-12",
    md: "py-20",
    lg: "py-32",
  }

  const isSideBySide = imagePosition === "left" || imagePosition === "right"
  const isImageOnTop = imagePosition === "top"

  return (
    <div className={sizeClasses[size]}>
      <div className={isSideBySide ? "grid grid-cols-1 md:grid-cols-2 gap-12 items-center" : "space-y-8"}>
        {/* Image on top */}
        {isImageOnTop && imageUrl && (
          <div>
            <img 
              src={imageUrl} 
              alt="Hero" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Content */}
        <div className={`space-y-6 ${
          isSideBySide && imagePosition === "right" ? "md:order-1" : ""
        } ${
          isSideBySide && imagePosition === "left" ? "md:order-2" : ""
        }`}>
          <Text variant="h1" className="text-6xl">
            {title}
          </Text>
          <Text variant="body" className="text-xl text-slate-700">
            {subtitle}
          </Text>
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex gap-4 pt-4">
              {primaryButtonText && (
                <Button 
                  variant="primary" 
                  onClick={() => window.location.href = primaryButtonHref}
                >
                  {primaryButtonText}
                </Button>
              )}
              {secondaryButtonText && (
                <Button 
                  variant="secondary" 
                  onClick={() => window.location.href = secondaryButtonHref}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Image on left/right */}
        {isSideBySide && imageUrl && (
          <div className={imagePosition === "left" ? "md:order-2" : "md:order-1"}>
            <img 
              src={imageUrl} 
              alt="Hero" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Image on bottom */}
        {imagePosition === "bottom" && imageUrl && (
          <div>
            <img 
              src={imageUrl} 
              alt="Hero" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
    </div>
  )
}