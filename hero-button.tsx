import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroButton() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-black">Golden Tiger Moulds</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Precision engineering and innovative mould solutions for your manufacturing needs
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA Button */}
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 text-lg transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Secondary Button */}
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-yellow-400 text-black hover:bg-yellow-50 font-semibold px-8 py-3 text-lg transition-all duration-200"
          >
            Learn More
          </Button>
        </div>

        {/* Alternative button styles */}
        <div className="pt-8 space-y-4">
          <p className="text-sm text-gray-600">Alternative button styles:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Solid yellow button */}
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium">Contact Us</Button>

            {/* Yellow outline button */}
            <Button variant="outline" className="border-yellow-400 text-black hover:bg-yellow-400 hover:text-black">
              Our Services
            </Button>

            {/* Yellow accent with shadow */}
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Loading & Interactive Buttons */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">Loading & Interactive Buttons</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent mr-2"></div>
              Loading...
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium group">
              <span className="group-hover:hidden">Hover Me</span>
              <span className="hidden group-hover:inline">Clicked!</span>
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative overflow-hidden">
              <span className="relative z-10">Progress Button</span>
              <div className="absolute bottom-0 left-0 h-1 bg-yellow-600 w-0 group-hover:w-full transition-all duration-2000"></div>
            </Button>
          </div>
        </div>

        {/* Neon & Glow Effects */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">Neon & Glow Effects</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/80 hover:shadow-xl transition-all">
              Glow Button
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium border-2 border-yellow-300 shadow-inner">
              Inner Shadow
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium ring-2 ring-yellow-300 ring-offset-2 hover:ring-yellow-400">
              Ring Effect
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative">
              <span className="absolute inset-0 bg-yellow-300 blur-md opacity-75"></span>
              <span className="relative">Blur Glow</span>
            </Button>
          </div>
        </div>

        {/* 3D & Depth Effects */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">3D & Depth Effects</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium shadow-lg border-b-4 border-yellow-600 hover:border-yellow-700 active:border-b-2 active:translate-y-1 transition-all">
              3D Press
            </Button>
            <Button className="bg-gradient-to-b from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 text-black font-medium shadow-lg">
              3D Gradient
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium transform perspective-1000 hover:rotateX-12 transition-transform">
              Perspective
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative before:absolute before:inset-0 before:bg-yellow-300 before:transform before:skew-x-12 before:-z-10">
              Skewed Background
            </Button>
          </div>
        </div>

        {/* Morphing & Shape Buttons */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">Morphing & Shape Buttons</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-none hover:rounded-full transition-all duration-500">
              Morph Shape
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium clip-path-polygon hover:clip-path-circle transition-all duration-500">
              Polygon Button
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium w-32 hover:w-48 transition-all duration-300">
              Expand Width
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium h-10 hover:h-12 transition-all duration-300">
              Expand Height
            </Button>
          </div>
        </div>

        {/* Textured & Patterned Buttons */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">Textured & Patterned Buttons</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium bg-gradient-to-r from-yellow-400 via-yellow-300 via-yellow-400 to-yellow-400 bg-size-200 hover:bg-pos-100 transition-all duration-500">
              Stripe Pattern
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative overflow-hidden">
              <div className="absolute inset-0 bg-yellow-300 opacity-50 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative">Shine Effect</span>
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium bg-opacity-90 backdrop-blur-sm border border-yellow-300">
              Glass Effect
            </Button>
          </div>
        </div>

        {/* Split & Multi-part Buttons */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">Split & Multi-part Buttons</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-r-none border-r border-yellow-500">
                Action
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-l-none px-2">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-b-none text-xs py-1">
                Top
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-t-none text-xs py-1">
                Bottom
              </Button>
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative pl-12">
              <div className="absolute left-0 top-0 bottom-0 w-10 bg-yellow-500 rounded-l flex items-center justify-center">
                <ArrowRight className="h-4 w-4" />
              </div>
              With Icon Section
            </Button>
          </div>
        </div>

        {/* Floating & Positioned Buttons */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">Floating & Positioned Buttons</h3>
          <div className="flex flex-wrap gap-3 justify-center relative">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full shadow-2xl hover:shadow-yellow-400/50 transform hover:-translate-y-2 transition-all">
              Floating
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative">
              With Badge
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative">
              Notification
              <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full animate-ping"></span>
              <span className="absolute top-0 right-0 h-3 w-3 bg-green-500 rounded-full"></span>
            </Button>
          </div>
        </div>

        {/* Vintage & Retro Buttons */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">Vintage & Retro Buttons</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold border-4 border-yellow-600 shadow-lg font-mono uppercase tracking-wider">
              Retro Style
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium border-2 border-dashed border-yellow-600 bg-opacity-80">
              Vintage Dashed
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-shadow shadow-inner border border-yellow-600">
              Embossed
            </Button>
          </div>
        </div>

        {/* Minimalist & Clean Buttons */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">Minimalist & Clean Buttons</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-light border-none shadow-none">
              Ultra Clean
            </Button>
            <Button className="bg-transparent hover:bg-yellow-400 text-black font-medium border-b-2 border-yellow-400 rounded-none pb-1">
              Underline Only
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-6 py-1">
              Minimal Padding
            </Button>
            <Button className="bg-yellow-50 hover:bg-yellow-100 text-black font-medium border border-yellow-200">
              Subtle Minimal
            </Button>
          </div>
        </div>

        {/* Experimental & Creative Buttons */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-700 text-left">Experimental & Creative Buttons</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium transform hover:scale-110 hover:rotate-3 transition-all duration-300">
              Playful Transform
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative overflow-hidden">
              <span className="relative z-10">Liquid Fill</span>
              <div className="absolute bottom-0 left-0 w-full h-0 bg-yellow-600 hover:h-full transition-all duration-500 ease-out"></div>
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium animate-bounce hover:animate-none">
              Bouncing
            </Button>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium relative">
              <span className="inline-block hover:animate-spin">🐅</span>
              Tiger Button
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
