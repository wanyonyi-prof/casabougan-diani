@echo off
echo Creating Casabougan Apartments Diani project structure...

REM Create folders
mkdir src\components\Hero
mkdir src\components\BookingForm
mkdir src\components\ApartmentTypes
mkdir src\components\RoomsLayout
mkdir src\components\Gallery
mkdir src\components\Gallery\ImageModal
mkdir src\components\Location
mkdir src\components\Contact
mkdir src\components\BookingSummary
mkdir src\components\BookingModal
mkdir src\hooks
mkdir src\services
mkdir src\types
mkdir src\utils
mkdir src\assets
mkdir public\images\hero
mkdir public\gallery
mkdir public\videos

REM Create files
type nul > src\components\Hero\Hero.tsx
type nul > src\components\Hero\Hero.css
type nul > src\components\BookingForm\BookingForm.tsx
type nul > src\components\BookingForm\BookingForm.css
type nul > src\components\ApartmentTypes\ApartmentTypes.tsx
type nul > src\components\ApartmentTypes\ApartmentTypes.css
type nul > src\components\RoomsLayout\RoomsLayout.tsx
type nul > src\components\RoomsLayout\RoomsLayout.css
type nul > src\components\Gallery\Gallery.tsx
type nul > src\components\Gallery\Gallery.css
type nul > src\components\Gallery\ImageModal\ImageModal.tsx
type nul > src\components\Location\Location.tsx
type nul > src\components\Location\Location.css
type nul > src\components\Contact\Contact.tsx
type nul > src\components\Contact\Contact.css
type nul > src\components\BookingSummary\BookingSummary.tsx
type nul > src\components\BookingSummary\BookingSummary.css
type nul > src\components\BookingModal\BookingModal.tsx
type nul > src\components\BookingModal\BookingModal.css
type nul > src\hooks\useExchangeRate.ts
type nul > src\services\exchangeRateService.ts
type nul > src\types\index.ts
type nul > src\utils\dateUtils.ts
type nul > src\App.tsx
type nul > src\App.css
type nul > src\index.tsx
type nul > src\index.css

echo Project structure created successfully!
pause