<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeContoller extends Controller
{
    public function index()
    {
        return Employee::all();
    }
    public function store(Request $request)
    {
        return Employee::create($request->all());
    }
    public function delete(Request $request, $id)
    {
        $user = Employee::findOrFail($id);
        $user->delete();
        return 204;
    }
}
