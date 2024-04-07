import React from "react"
import { Table, TableBody, TableCell, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Invoice = () => {
    return (
        <div>
            <div className="flex items-center justify-between w-full">
                <h1 className="text-lg font-semibold md:text-2xl mb-4">Invoice list</h1>
                <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button>
                                Add an invoice
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle className="mb-6">Add a new invoice</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <div className="mb-4">
                                        <Label htmlFor="clinic" className="mb-3">Clinic name</Label>
                                        <Input type="text" placeholder="Enter clinic name" />
                                    </div>
                                    <div className="mb-4">
                                        <Label htmlFor="amount" className="mb-3">Invoice amount</Label>
                                        <Input type="number" placeholder="Enter invoice amount" />
                                    </div>
                                    <div className="mb-4">
                                        <Label htmlFor="date" className="mb-3">Invoice file</Label>
                                        <Input type="file" placeholder="Enter invoice file" />
                                    </div>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Submit</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                </AlertDialog>
            </div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Clinic</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Clinic CHU</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">{new Date().toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                            <Button className="mr-2" variant="outline">Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Clinic CHU</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">{new Date().toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                            <Button className="mr-2" variant="outline">Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Clinic CHU</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">{new Date().toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                            <Button className="mr-2" variant="outline">Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Clinic CHU</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        <TableCell className="text-right">{new Date().toLocaleDateString()}</TableCell>
                        <TableCell className="text-right">
                            <Button className="mr-2" variant="outline">Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default Invoice