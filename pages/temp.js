const temp = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                <div class="text-center lg:w-2/3 w-full">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}</h1>
                    <div className="prose">{hydratedContent}</div>
                </div>
            </div>
        </section>
    );
}

export default temp;