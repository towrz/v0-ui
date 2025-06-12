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
      </div>
    </div>
  )
}
