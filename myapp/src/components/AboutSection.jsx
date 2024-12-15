import React from 'react';

const AboutSection = () => {
  return (
    (<section
      className="relative overflow-hidden bg-gradient-to-br from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-16">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="img/logosinfondo.png"
                alt="Professional using a tablet"
                className="w-full h-auto object-cover" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute inset-0 z-0">
              <div
                className="absolute inset-0 bg-gradient-to-br from-gray-200/30 to-gray-600/30 rounded-3xl transform rotate-3"></div>
              <div
                className="absolute top-1/4 right-1/4 w-32 h-32 bg-gray-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Impulsamos la digitalización
            </h2>
            <p className="text-lg text-gray-600">
            Creemos en crear un entorno donde la autonomía y el crecimiento sean el centro de todo. Inspirados en el potencial infinito de la tecnología y el aprendizaje, empoderamos a nuestros clientes para que tomen el control de sus proyectos, definan su visión y alcancen sus objetivos, mientras nosotros cultivamos soluciones innovadoras para impulsar su éxito.
            </p>
          </div>
        </div>
      </div>
    </section>)
  );
};

export default AboutSection;

