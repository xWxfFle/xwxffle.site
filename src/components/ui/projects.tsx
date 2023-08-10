'use client'
export const Projects = () => {
  return (
    <div className="mx-auto flex w-full flex-col flex-wrap items-start justify-center bg-base-200 md:flex-row">
      <div className=" h-full w-full p-6 text-xl md:my-12 md:mb-40 lg:w-4/6">
        <p className="mb-4 font-rammeto text-xl uppercase">03</p>
        <h2 className="mb-4 text-4xl font-bold leading-tight">Projects</h2>
        <p className="mb-8  leading-normal" />
        <div className="flex w-full flex-wrap gap-8 md:flex-row">
          <div className="card w-full xl:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Portfolio</h3>
              <p className="my-4">
                This site was made with Next.js, React Three Fiber and
                Theatre.js{' '}
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://github.com/xWxfFle/xwxffle.site"
                  target="_blank"
                >
                  <button className="btn-outline btn">Go to git</button>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full xl:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">ChatNext</h3>
              <p className="my-4">
                Chat app made with T3 Stack (Next.js, tRPC, Prisma, Tailwind){' '}
              </p>
              <div className="card-actions justify-end">
                <a href="https://github.com/xWxfFle/ChatNext" target="_blank">
                  <button className="btn-outline btn">Go to git</button>
                </a>
                <a href="https://chatnext-xwxffle.vercel.app" target="_blank">
                  <button className="btn-secondary btn">Open</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card w-full xl:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">First person camera</h3>
              <p className="my-4">
                Implementation of FPC with React Three Fiber and Rapier.js
              </p>
              <div className="card-actions justify-end">
                <a
                  href="https://github.com/xWxfFle/R3F-First-person-camera"
                  target="_blank"
                >
                  <button className="btn-outline btn">Go to git</button>
                </a>
                <a
                  href="https://xwxffle.github.io/R3F-First-person-camera/"
                  target="_blank"
                >
                  <button className="btn-secondary btn">Open</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card w-full xl:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Toyota AE86</h3>
              <p className="my-4">Car staging with postprocessing</p>
              <div className="card-actions justify-end">
                <a
                  href="https://github.com/xWxfFle/R3F-Car-staging"
                  target="_blank"
                >
                  <button className="btn-outline btn">Go to git</button>
                </a>
                <a href="https://r3f-car-staging.vercel.app" target="_blank">
                  <button className="btn-secondary btn">Open</button>
                </a>
              </div>
            </div>
          </div>

          <div className="card w-full xl:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Unit-01 staging</h3>
              <p className="my-4">Binding the camera to scroll</p>
              <div className="card-actions justify-end">
                <a href="https://github.com/xWxfFle/Eva-01" target="_blank">
                  <button className="btn-outline btn">Go to git</button>
                </a>
                <a href="https://xwxffle.github.io/Eva-01/" target="_blank">
                  <button className="btn-secondary btn">Open</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
