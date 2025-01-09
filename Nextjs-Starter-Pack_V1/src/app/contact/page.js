import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      {/* Header with Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-500 text-white p-4 z-10">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Title on the left */}
          <div className="text-xl font-bold">
            GuiltyMeow
          </div>

          {/* Navbar */}
          <nav className="flex space-x-4">
            <Link href="/" className="text-lg hover:text-red-500">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:text-red-500">
              About
            </Link>
            <Link href="/contact" className="text-lg hover:text-red-500">
              Contacts
            </Link>
            <Link href="/blog" className="text-lg hover:text-red-500">
              Blogs
            </Link>

          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Contacts</h1>

        <p className="text-lg text-center">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Quisque ac nullam primis diam quisque. Pulvinar nostra id amet cras ut laoreet mollis. Interdum eget mauris erat massa suscipit. Consectetur adipiscing vivamus montes proin sodales ex; curabitur nam. Odio augue sapien litora nostra montes feugiat rutrum. Conubia montes nec velit est bibendum odio risus. Dictum class et blandit aliquam placerat sodales nunc. Ad fermentum justo; consequat aptent nunc curabitur netus rhoncus. Convallis egestas et facilisis nisl pharetra.

          Congue erat sociosqu vivamus donec nostra in non. Enim accumsan nullam dis vel facilisis maximus nulla. Iaculis ante auctor mollis enim primis. Rhoncus etiam ac eget; maximus taciti aliquam. Finibus hendrerit aptent eu semper vel; senectus habitasse in. Libero tempus lacus tellus integer volutpat vitae feugiat primis. Senectus primis ad fames curabitur sapien efficitur habitasse sit. Lacinia aliquam luctus enim ad suspendisse tellus cras.

          Fringilla aenean curabitur facilisis euismod sollicitudin semper faucibus. Aenean nostra et odio sit; imperdiet mattis ligula. Gravida ex mi justo dolor est; sit tellus. Libero potenti nisl justo inceptos proin commodo efficitur ut. Montes nam at; vulputate felis etiam vel consequat scelerisque. Laoreet condimentum venenatis pellentesque facilisi proin cubilia vestibulum. Sit a erat magna metus suspendisse.

          Vivamus laoreet ex aptent urna scelerisque suspendisse semper. Porta et aptent maecenas vitae aenean lectus parturient. Parturient neque sapien nec suscipit volutpat sem est? Est lorem condimentum montes montes turpis netus aptent, leo accumsan. Litora sed habitant ultricies maecenas lobortis pharetra efficitur lacinia. Mattis hendrerit ridiculus libero placerat in eros.

          Blandit nibh et metus tincidunt natoque. Quam quis himenaeos mauris ornare commodo cras. Finibus ex consequat platea tristique accumsan enim ullamcorper. Arcu montes nunc dolor curae eros donec. Nec dolor iaculis magnis mus eget. Natoque suscipit sollicitudin bibendum inceptos eros mattis sodales. Lacus nisl molestie taciti imperdiet urna id.

          Vulputate cubilia nec netus elementum parturient pharetra fringilla ornare. Cursus fames a fringilla; nullam lacus pharetra? Maximus dapibus libero sit cursus magnis penatibus. Interdum nostra ipsum dui nostra curae iaculis sapien. Mi ex dapibus nec velit rhoncus enim faucibus dictum. Varius aliquet dignissim etiam nascetur duis. Eros consectetur semper sodales; eros lacus vivamus justo sit. Tincidunt etiam et rhoncus nisi libero habitasse.

          Magnis neque ultrices vestibulum iaculis suscipit tincidunt lacinia nisl. Ante semper ligula consectetur pharetra adipiscing tellus facilisis. Vulputate ligula nullam ac felis nibh nec montes condimentum. Lacinia adipiscing fusce urna diam vestibulum orci ac. Nunc volutpat tortor montes torquent; porta mattis placerat velit bibendum. Ultricies nullam lobortis purus tellus purus vivamus fringilla. Amet elit ultricies enim vitae et. Fermentum phasellus placerat rhoncus enim tristique. Convallis vel mus enim sed, natoque egestas sagittis. Finibus cras dictum nisi montes sit maximus nostra.

          Torquent ut nisi eget; vitae adipiscing faucibus duis donec. Dictum nascetur phasellus urna ullamcorper praesent fames pulvinar elementum. Eros tincidunt pretium dapibus per nisl adipiscing dapibus. Taciti nibh aliquam habitant; eget fermentum ante amet pretium. Pulvinar ullamcorper sagittis mi ante non morbi. Diam morbi fermentum habitant varius; dolor cras. Hendrerit id interdum nisl in vulputate malesuada aptent mauris. Torquent torquent lacus, elit tempor donec rutrum.

          Potenti penatibus arcu maecenas cras cras maximus tristique nullam. Inceptos lorem nulla vivamus elit leo convallis nostra varius luctus. In quisque in lacus integer, donec integer egestas. Nibh cras nec hendrerit odio imperdiet nullam felis. Mollis curae primis nam dictumst lobortis. Rutrum sit sodales quis dui odio sociosqu eget orci vivamus. Faucibus nunc nascetur integer a habitasse eleifend conubia sagittis. Curabitur magna finibus interdum duis taciti neque. Semper tincidunt facilisis augue cras urna. Habitant non turpis mattis elementum feugiat; hendrerit facilisis vestibulum.

          Dictumst curabitur pellentesque praesent eget quis lacinia ut. Phasellus urna ultrices et facilisis ac nascetur primis mus. Morbi proin ornare posuere commodo tincidunt. Nam malesuada turpis lectus aenean inceptos id. Libero bibendum nunc blandit elit suspendisse nascetur primis. Scelerisque rhoncus ex potenti neque pharetra viverra. Gravida massa faucibus nisl a tempus curae.

          Aptent aliquam fermentum elementum, elementum proin mi eu dapibus. Nisi malesuada conubia consequat fermentum nostra cras curae dis? Tellus sed molestie scelerisque natoque vel orci montes. Sociosqu facilisis libero pharetra purus id suspendisse at enim. Dictum posuere nibh ante hendrerit; amet rutrum nisl sit. Duis venenatis enim dictumst consectetur in euismod. Sem facilisis viverra condimentum posuere congue condimentum bibendum purus sodales. Volutpat ultricies nunc in elit finibus netus dui quisque condimentum. Vel non dui netus lobortis dictum suspendisse quisque.

          Eleifend accumsan ridiculus vehicula augue accumsan pretium leo sociosqu. Lectus sagittis libero class fames fusce bibendum volutpat. Dignissim sit pretium suscipit, ornare sollicitudin id nec. Fames id consectetur nisl; habitasse molestie parturient ad. Libero luctus donec nostra aptent eget imperdiet iaculis donec fringilla. Dignissim venenatis sollicitudin massa id pharetra semper dignissim. Laoreet etiam dis tristique natoque vehicula sapien cras ultricies etiam. Maecenas ornare mi curabitur cubilia, feugiat duis. Luctus efficitur lacus sociosqu enim curae risus.

          Libero pretium luctus ante; urna urna luctus rhoncus integer. Dis iaculis primis primis dictum adipiscing. Urna finibus lacinia mi fermentum; sociosqu mus morbi magnis. Sem tempor consequat curae, urna mi consectetur. Semper quisque tincidunt id ligula semper. Tempus faucibus inceptos massa consectetur, per venenatis augue auctor.

          Interdum penatibus varius lacus cubilia congue congue lobortis curabitur. Ligula facilisis nunc nunc vivamus dis venenatis natoque diam. Vehicula fames diam conubia gravida sit. Tempus diam dis quis himenaeos faucibus cursus ultricies. Malesuada conubia quis cubilia erat penatibus. Lobortis taciti elit ultrices potenti etiam elementum quis. Tincidunt ligula arcu tempor semper dapibus diam sit. Risus pulvinar mauris venenatis vestibulum leo habitasse nullam. Ullamcorper iaculis metus taciti inceptos libero rhoncus vitae vehicula?

          Porttitor nam donec lectus viverra venenatis pulvinar. Sit curae ornare fermentum donec mi ornare facilisis. Mollis arcu lacus phasellus ridiculus justo libero eget proin. Consequat nam penatibus ligula luctus nascetur semper nullam tristique class. Phasellus praesent tempor donec vivamus mauris. Sociosqu mollis per etiam sagittis accumsan hendrerit! Hac himenaeos malesuada auctor mi dictum leo mauris penatibus. Nisl vehicula ut vulputate hac; odio suspendisse.

          Eros aliquet pretium at senectus justo lacinia finibus tortor posuere. Quisque tincidunt id; nisl cubilia metus fringilla augue tempus. Venenatis ultricies ex lacinia scelerisque fusce mus egestas. Sed ullamcorper sit bibendum curabitur nascetur maecenas volutpat. Fermentum quam finibus senectus dignissim venenatis est mi urna condimentum. Ridiculus feugiat faucibus sollicitudin ex; elit pellentesque. Efficitur semper felis placerat velit vehicula nullam amet. Massa platea dignissim quisque velit purus cras.

          Sociosqu malesuada dictum eros ultricies amet ultrices quam quam. Eleifend congue fermentum donec mattis arcu velit. Facilisis tincidunt lobortis orci dapibus malesuada himenaeos. Mauris faucibus sapien gravida placerat finibus. Libero luctus ullamcorper ultricies tristique integer nec. Mollis dui pellentesque phasellus euismod nisi ipsum. Augue tempor scelerisque dui euismod, fringilla luctus. Nisl himenaeos etiam elit curabitur aenean potenti natoque fermentum. Litora massa varius interdum vitae quisque; in arcu nec.

          Pharetra himenaeos vulputate curae sodales aliquam hendrerit. Commodo praesent at vitae pulvinar aptent. Consequat commodo nulla himenaeos rutrum duis. Suspendisse consectetur imperdiet finibus, condimentum nisl parturient. Eu nulla elit; sollicitudin commodo posuere ipsum quis arcu. Placerat vulputate elementum sit aliquet, sit id mus. Amet condimentum natoque eu dictum habitant auctor a neque. Tellus dapibus suspendisse dignissim risus senectus ut pulvinar. Consequat habitant sem sapien viverra in integer dictum ipsum ultrices.

          Tristique urna laoreet convallis; euismod ultricies sed venenatis pharetra. Odio at taciti velit leo; tortor quisque phasellus. Ut scelerisque ultrices sit; iaculis sapien curae. Inceptos magnis porttitor fames sagittis dignissim tincidunt. Sociosqu penatibus sapien inceptos dapibus a dignissim tristique in etiam. Eget quisque ullamcorper ultricies cras praesent pretium cubilia. Lectus diam duis malesuada senectus; lobortis sapien sed.

          Parturient neque neque est viverra; iaculis vulputate netus. Dolor sit praesent vel platea volutpat hac. Efficitur nullam inceptos convallis ridiculus scelerisque feugiat urna. Sollicitudin fusce libero rhoncus ipsum sociosqu congue. Nec viverra ultrices at semper condimentum mus penatibus laoreet. Accumsan aenean ullamcorper diam purus arcu nullam aliquet proin.
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-500 text-white p-4 mt-12 text-center">
        <p>© 2025 GuiltyMeow</p>
      </footer>
    </main>
  );
}
