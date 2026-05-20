export const getServices = async (req, res) => {

  try {

    const services = [

      {
        id: 1,
        title: "GIS & Spatial Analysis",
        description:
          "Enterprise GIS, spatial databases, remote sensing, and geospatial analytics.",
      },

      {
        id: 2,
        title: "Urban & Regional Planning",
        description:
          "Master planning, land use planning, transportation planning, and regional development.",
      },

      {
        id: 3,
        title: "Survey & Geomatics",
        description:
          "Topographic surveys, cadastral mapping, GPS surveys, and geospatial data acquisition.",
      },

      {
        id: 4,
        title: "Engineering Consultancy",
        description:
          "Infrastructure systems, utilities planning, civil engineering support, and project supervision.",
      },

      {
        id: 5,
        title: "Architecture & Urban Design",
        description:
          "Architectural concepts, urban design, visualization, and development planning.",
      },

      {
        id: 6,
        title: "Smart City Systems",
        description:
          "Urban dashboards, smart infrastructure, planning intelligence, and digital city systems.",
      },

    ];

    res.json(services);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to fetch services",
    });

  }

};