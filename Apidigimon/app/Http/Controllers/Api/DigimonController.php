<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\digimon;

class DigimonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $digimon = Digimon::all();
        return $digimon;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $digimon = new Digimon();
        $digimon->name = $request->name;
        $digimon->img = $request->img;
        $digimon->level = $request->level;
        $digimon->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $digimon = Digimon::find($id);
        return $digimon;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Response $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, string $id)
    {
        $digimon = Digimon::findOrFail($request->id);
        $digimon->name = $request->name;
        $digimon->img = $request->img;
        $digimon->level = $request->level;
        $digimon->save();
        return $digimon;
    }

    /**
     * Remove the specified resource from storage.
     *
     */
    public function destroy(string $id)
    {
        $digimon = Digimon::destroy($id);
        return $digimon;
    }
}
