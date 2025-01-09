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
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>

        <p className="text-lg text-center">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Maximus faucibus senectus malesuada magna volutpat quis platea ex cubilia. Proin metus magna nisi non fames ex laoreet. Class eu ornare potenti elementum platea, hac aenean finibus. Sapien commodo auctor euismod nam vestibulum eget? Enim a fringilla phasellus mattis iaculis placerat. Ex natoque rhoncus euismod molestie convallis praesent malesuada? Consequat mattis pulvinar platea; aliquam sapien metus posuere. Fermentum vel est nam euismod; non nisi viverra.

          Velit maximus nulla ridiculus dignissim vitae quisque. Nostra fringilla faucibus mauris arcu; at aliquet sapien. Leo nostra habitasse nascetur dignissim netus penatibus laoreet imperdiet. Habitant primis ex turpis pretium, ut enim. Efficitur cubilia arcu hendrerit ullamcorper pellentesque congue lobortis senectus. Semper dictum hendrerit integer porta suscipit cursus tristique varius adipiscing. Lacinia mauris leo porttitor fermentum tempor fusce nisl. Nunc curabitur ullamcorper dictumst non mauris ultrices bibendum morbi imperdiet.

          Eget varius habitant maecenas placerat tempus pulvinar purus ullamcorper eleifend! Sollicitudin rhoncus adipiscing non felis, fringilla elit platea pretium! Ipsum ipsum aliquam ipsum aptent mauris felis egestas sollicitudin massa. Mattis parturient interdum curae nam iaculis lacus etiam urna venenatis. Mauris ac dui vestibulum lacus potenti. Ac efficitur duis pellentesque consectetur quisque efficitur. Vestibulum morbi dolor lacinia condimentum ad integer facilisis mattis. Senectus imperdiet elementum netus dignissim habitasse netus praesent. Sit duis pulvinar enim pretium nibh fames ornare felis lacinia.

          Cursus praesent orci curabitur; duis quisque dui fermentum parturient. Rutrum montes posuere, feugiat at congue parturient. Ante interdum platea facilisi integer id ex primis. Dignissim sit auctor magna laoreet consequat. Ante semper risus aptent himenaeos potenti sit. Fusce eu felis elementum nunc tortor vitae efficitur pellentesque platea. Ridiculus quisque sollicitudin maximus diam amet.

          Nulla non magnis vivamus nam tristique porttitor taciti. Justo hac cubilia scelerisque pretium magna cursus. Rutrum interdum lobortis ex luctus ornare montes eleifend metus. Donec hac ultricies sapien pulvinar non ipsum mi cursus sodales. Pellentesque erat tortor taciti metus nullam, lacinia amet libero. Viverra scelerisque consectetur ligula, interdum dictumst habitant convallis laoreet! Netus rutrum laoreet mauris iaculis efficitur. Eros bibendum bibendum vestibulum phasellus auctor ullamcorper enim arcu.

          Pretium laoreet lacus aptent odio tellus tellus nostra aliquam. Dignissim sollicitudin sodales praesent fames litora. Est netus auctor lacinia porta, fusce per. Tristique vitae placerat luctus auctor euismod augue consectetur mus eget. Ac a tortor sed interdum eleifend. Vivamus auctor parturient est est nam. At eleifend odio integer leo nunc. Fringilla cubilia bibendum dis facilisi quis. Nec molestie quisque cursus integer cursus finibus vestibulum.

          Dictum ut per nostra augue fusce euismod. Nisi massa est varius mollis montes facilisi. Nascetur ex feugiat et cursus volutpat semper aliquam curabitur. Elementum risus parturient potenti primis per at donec. Enim ridiculus dis sed diam ridiculus. Porttitor placerat elementum ut laoreet vel etiam. Lacinia suscipit fringilla maximus laoreet bibendum vivamus hac laoreet semper. Nibh sollicitudin nostra duis nisi netus fusce.

          Sagittis libero nam molestie elementum fermentum dapibus. Ipsum aenean felis mollis accumsan, congue suspendisse iaculis feugiat. Per ornare massa sem platea ligula parturient dis volutpat praesent. Cras habitant tempus aliquet vestibulum feugiat commodo primis. Ac gravida cras cubilia mus proin rhoncus augue. Eleifend adipiscing nullam at pellentesque himenaeos. Ad proin sollicitudin nulla aenean aliquet metus. Quis mauris aliquam eros at bibendum suspendisse. Bibendum leo dapibus primis efficitur volutpat congue interdum. Torquent lacus turpis augue etiam; ornare amet.

          Enim at ad; sagittis aliquam maecenas metus. Facilisis vel tempus netus; fermentum porta fames. Tellus dignissim tempus semper aliquam vitae ultricies nulla dictum dis. Fames tempor eros conubia lacinia vivamus. Imperdiet sagittis malesuada placerat finibus penatibus tincidunt etiam. Tristique dictum odio metus facilisis aenean donec cras aliquet. Euismod class velit sit sociosqu nulla malesuada bibendum hac suscipit.

          Lacus dictum ut mollis fermentum arcu aptent. Est nullam tellus finibus ac a mollis natoque est. Dictum curabitur dignissim elit malesuada pharetra ipsum. Dolor magnis purus sollicitudin auctor phasellus praesent blandit gravida. Mauris molestie purus risus porta lacus iaculis. Vivamus gravida adipiscing etiam sollicitudin, arcu feugiat magnis inceptos nibh? Vivamus tortor neque volutpat aenean volutpat lacus. Cursus quis ut dui cras tincidunt risus erat.

          Risus dolor ligula aliquam platea fusce metus metus maecenas. Tortor quis condimentum pulvinar placerat; sagittis rutrum. Rhoncus tincidunt nam suspendisse ac mollis neque etiam ornare. Torquent habitant lectus imperdiet nullam vitae suscipit vel non interdum. Integer nam arcu ac ultrices sodales proin consectetur? Leo consectetur lectus ligula, cubilia mi dolor penatibus donec. Magna donec consectetur sagittis bibendum porttitor, curae vel. Ultrices magnis facilisi netus blandit sagittis ridiculus ex. Mus blandit enim metus elementum varius cursus curabitur. Amet himenaeos euismod luctus elit integer adipiscing morbi eleifend.

          Cras penatibus habitant sapien eleifend porttitor torquent. Sed vehicula inceptos praesent ut sed. Id duis porttitor cubilia placerat nibh tincidunt fringilla sociosqu. Nisl libero euismod curabitur odio ultricies mus faucibus vehicula. Integer facilisis consectetur suspendisse nam at; ac feugiat hac conubia. Semper ligula sapien volutpat rutrum varius condimentum mi scelerisque. Sapien hendrerit feugiat lorem vestibulum ipsum sociosqu. In nullam ut ut quis scelerisque mi suspendisse iaculis sem.

          Est nisl curabitur facilisi laoreet lacus taciti. Ante penatibus accumsan blandit dolor scelerisque ligula. Velit imperdiet sociosqu tempus sodales vel. Placerat senectus suspendisse; nostra ac fames porttitor vitae natoque. Praesent vitae velit venenatis ultrices ullamcorper dignissim; ex orci malesuada. Praesent fringilla vivamus pellentesque maecenas conubia habitant sed rutrum. Ultrices rhoncus eget dictum velit dui faucibus? Amet montes cubilia quisque mus fames ligula per!

          Iaculis vel scelerisque vivamus dapibus vitae scelerisque mattis habitant? Justo mus efficitur finibus elementum condimentum lectus. Ac nam aliquam mauris dignissim porta rutrum cras. Ullamcorper semper luctus; nam quam quam taciti elementum. Sed placerat rhoncus praesent nisi tempus vivamus ridiculus tristique velit. Suspendisse magna curabitur aliquet lacus aenean justo. Proin cras tincidunt senectus; vestibulum litora curabitur faucibus parturient. Justo sociosqu hac sociosqu augue nullam ut penatibus, vulputate hac. Porta pharetra aptent facilisi curabitur facilisi nunc netus.

          Semper tempus lectus fusce, aenean eleifend maximus pretium sociosqu. At aenean sed sollicitudin vestibulum habitasse tellus. Diam suscipit integer curabitur vehicula dapibus lectus. Parturient sapien vivamus lacus pharetra vestibulum sem. Nulla finibus velit fames nullam cubilia vestibulum ipsum. Mattis facilisis volutpat ridiculus, aliquet magnis turpis leo vulputate ullamcorper. Nisi ad mauris; per tortor magnis nostra.

          Libero ultrices commodo leo tincidunt nullam ad mus placerat. Blandit urna facilisi; euismod augue pretium facilisi. Inceptos hac magna lacus vehicula magna dui. Dignissim libero porta aenean quisque ligula dui magna sollicitudin lorem. Facilisi turpis laoreet etiam dapibus conubia non. Magnis gravida nec laoreet consectetur consequat senectus aliquet tempus ante. Mollis duis interdum accumsan egestas tempus aptent.

          Montes vel maecenas porttitor ante a semper. Hendrerit sollicitudin magna luctus class maximus vivamus? Lectus bibendum malesuada litora maximus nec tristique, quam porttitor placerat. Euismod et orci lobortis sit mattis vivamus commodo. Accumsan pellentesque molestie facilisi odio viverra amet conubia. Conubia et sodales volutpat consectetur suscipit purus interdum. Sed ad potenti penatibus, ultricies molestie non. Curae posuere per suspendisse nullam suscipit ultricies suspendisse lorem viverra. Platea fusce montes augue rutrum in tempus.

          Adipiscing vitae tortor nibh montes habitant nullam tempor facilisis non. At tristique fames massa potenti netus semper pretium. Accumsan proin posuere aliquet phasellus conubia tincidunt porttitor arcu. Dapibus congue nullam pellentesque auctor dignissim cursus. Bibendum augue odio turpis ante sem curabitur enim. Facilisis primis sem netus; conubia interdum congue et ante. Vivamus egestas fusce metus praesent; eget quis facilisi euismod mollis.

          Placerat aptent vulputate diam cubilia suscipit netus suspendisse potenti. Blandit integer natoque auctor mus ut laoreet nulla. Placerat metus diam nulla suspendisse tempus. Aptent augue porttitor nascetur risus tellus congue sit vel. Neque mauris molestie elementum ridiculus duis quam aliquam. Quis sodales vitae curabitur tellus tristique rutrum. Parturient pellentesque mi bibendum consequat consequat. Tristique ad consequat viverra condimentum ac imperdiet vestibulum.

          Elit sed ipsum vestibulum justo lacinia primis et justo libero. Eros lobortis donec mus feugiat sollicitudin dictum vel donec. Laoreet efficitur fusce parturient; lorem efficitur enim sed. Cubilia ante nibh torquent ipsum nascetur nibh dui. Mus tellus nisl magnis eros curabitur, eget finibus litora. Vestibulum eu ut purus penatibus, varius inceptos penatibus. Vehicula hac dui; fringilla ex aenean malesuada tellus.
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-500 text-white p-4 mt-12 text-center">
        <p>© 2025 GuiltyMeow</p>
      </footer>
    </main>
  );
}
