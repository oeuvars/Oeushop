"use client"

import { useRouter, useSearchParams } from "next/navigation"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const filters = [
  {
    id: "size",
    name: "Size",
    options: [
      { value: "A2", label: "A2" },
      { value: "A3", label: "A3" },
      { value: "A4", label: "A4" },
      { value: "A5", label: "A5" },
      { value: "B4", label: "B4" },
      { value: "B5", label: "B5" },
    ],
  },
]

export function ProductFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchvalues = Array.from(searchParams.entries())
  return (
    <form className="sticky top-20">
      <h3 className="sr-only">Categories</h3>

      {filters.map((section, i) => (
        <Accordion key={i} type="single" collapsible>
          <AccordionItem value={`item-${i}`}>
            <AccordionTrigger>
              <span>
                {section.name}{" "}
                <span className="ml-1 text-xs font-extrabold uppercase text-gray-400"></span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      checked={searchvalues.some(
                        ([key, value]) =>
                          key === section.id && value === option.value
                      )}
                      id={`filter-${section.id}-${optionIdx}`}
                      onClick={(event) => {
                        const params = new URLSearchParams(searchParams)
                        const checked =
                          event.currentTarget.dataset.state === "checked"
                        checked
                          ? params.delete(section.id)
                          : params.set(section.id, option.value)
                        router.replace(`/?${params.toString()}`)
                      }}
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </form>
  )
}
