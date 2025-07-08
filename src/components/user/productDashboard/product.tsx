"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, Filter, Upload, Plus, MoreHorizontal, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Sample product data
const products = [
  {
    id: 1,
    image: "/placeholder.svg?height=40&width=40",
    name: "Front Brake Pad - Swift 2016 Petrol",
    category: "Braking System",
    subCategory: "Brake Pads",
    brand: "Bosch",
    productType: "Aftermarket",
    status: "Active",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=40&width=40",
    name: "Front Brake Pad - Swift 2016 Petrol",
    category: "Braking System",
    subCategory: "Brake Pads",
    brand: "Bosch",
    productType: "Aftermarket",
    status: "Disable",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=40&width=40",
    name: "Front Brake Pad - Swift 2016 Petrol",
    category: "Braking System",
    subCategory: "Brake Pads",
    brand: "Bosch",
    productType: "Aftermarket",
    status: "Active",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=40&width=40",
    name: "Front Brake Pad - Swift 2016 Petrol",
    category: "Braking System",
    subCategory: "Brake Pads",
    brand: "Bosch",
    productType: "Aftermarket",
    status: "Pending",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=40&width=40",
    name: "Front Brake Pad - Swift 2016 Petrol",
    category: "Braking System",
    subCategory: "Brake Pads",
    brand: "Bosch",
    productType: "Aftermarket",
    status: "Active",
  },
]

// Status badge component with proper styling
const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "disable":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <Badge variant="secondary" className={getStatusColor(status)}>
      {status}
    </Badge>
  )
}

export default function ProductManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search Spare parts"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 flex-wrap">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            Requests
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Upload className="h-4 w-4" />
            Upload
          </Button>
          <Button className="gap-2 bg-(--) hover:bg-red-700">
            <Plus className="h-4 w-4 text-(--primary)" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Product Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Product</CardTitle>
          <p className="text-sm text-gray-600">Manage your product and view</p>
        </CardHeader>
        <CardContent>
          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">Image</TableHead>
                  <TableHead className="min-w-[200px]">Name</TableHead>
                  <TableHead className="hidden md:table-cell">Categories</TableHead>
                  <TableHead className="hidden lg:table-cell">Sub Categories</TableHead>
                  <TableHead className="hidden md:table-cell">Brand</TableHead>
                  <TableHead className="hidden lg:table-cell">Product type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-100">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="hidden md:table-cell text-gray-600">{product.category}</TableCell>
                    <TableCell className="hidden lg:table-cell text-gray-600">{product.subCategory}</TableCell>
                    <TableCell className="hidden md:table-cell text-gray-600">{product.brand}</TableCell>
                    <TableCell className="hidden lg:table-cell text-gray-600">{product.productType}</TableCell>
                    <TableCell>
                      <StatusBadge status={product.status} />
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Archive</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-gray-600">Showing 1-5 of 32 products</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
